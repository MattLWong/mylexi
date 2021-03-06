class Api::UsersController < ApplicationController
  def show
    debugger
    @user = User.find_by(id: params[:user_id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user
      @user.delete
      render 'api/users/show'
    else
      render json: ["Could not find this user"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :username, :email, :password)
  end
end
