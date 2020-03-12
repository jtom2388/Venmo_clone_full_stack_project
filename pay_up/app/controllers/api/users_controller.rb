class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
          log_in(@user)
          render '/api/users/show'
        else
          render json: @user.errors.full_messages, status: 422
        end
    end

    def index
      @users = User.all
      render :index
    end

    def show
      debugger
      @user = User.find_by(username: params[:user][:username])
      render :show
    end
    
    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
