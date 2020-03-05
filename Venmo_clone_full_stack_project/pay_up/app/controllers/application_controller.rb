class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_log_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

    def logged_in?
        !!current_user
    end

    def log_in(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
    end
end
