class Api::UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        log_in(@user)
          render '/api/users/show'
        else
          
          render json: @user.errors.full_messages, status: 418
          # render json: ['Password is too short. Must be at least 6 characters long.'], status: 422
        end
    end

    def index
      @users = User.all
      render :index
    end

    def show
      @user = User.find_by(username: params[:user][:transaction][:payer])
      @recipient = User.find_by(username: params[:user][:transaction][:recipient])
      render :show
    end

    def update
      @user = User.find_by(id: params[:id])
      # @user = {
      #   id: params[:user][:id],
      #   username: params[:user][:username],
      #   balance: params[:user][:balance],
      #   profile_photo: params[:user][:profile_photo]
      # }
      # @user["profile_photo"] = params[:user][:profile_photo] 
      if @user.update(user_params)
        render '/api/users/show'
      else
        render json: ['Photo upload failed']
      end
    end
    
    private

    def user_params
        params.require(:user).permit(:id, :username, :password, :balance, :profile_photo)
    end
end
