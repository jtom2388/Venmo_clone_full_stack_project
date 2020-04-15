# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  balance         :float
#  account_number  :bigint
#
class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, :account_number, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true 
    after_initialize :ensure_session_token, :add_default_profile_photo
    before_validation :generate_account_number
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

    has_many :friendships,
        foreign_key: :user_id,
        class_name: :Friendship

    has_many :friends,
        through: :friendships,
        source: :friend

    has_one_attached :profile_photo

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
        self.account_number = rand.to_s[2..10].to_i
        # self.save!
    end

    def payer_change(amount)
        if self.balance > amount
            self.balance -= amount
            self.save!
        end
    end

    def recipient_change(amount)
        self.balance += amount
        self.save!
    end

    def add_default_profile_photo
        unless self.profile_photo.attached?
            self.profile_photo.attach(io: File.open(Rails.root.join("lib", "seeds", "Default-Profile-Picture.png")), filename: 'Default-Profile-Picture.png')
            # self.profile_photo.attach(io: File.open(Rails.root.join("lib", "seeds", "blank-profile-picture-973461_1280.png")), filename: 'blank-profile-picture-973461_1280.png')
        end
    end
end
