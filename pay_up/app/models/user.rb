class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :paid_transactions,
        foreign_key: :payer_id,
        class_name: :Transaction

    has_many :received_transactions,
        foreign_key: :recipient_id,
        class_name: :Transaction

    has_many :reminders_for_payment,
        foreign_key: :requestor_id,
        class_name: :Request

    has_many :reminders_to_pay,
        foreign_key: :requestee_id,
        class_name: :Request

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        @user && @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def generate_account_number
        self.account_number = 10.times.map{rand(10).join}
    end

    def default_balance
        self.balance = 1000
    end
end
