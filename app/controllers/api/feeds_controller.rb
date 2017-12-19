class Api::FeedsController < ApplicationController
  def show
    if current_user
      @sentences = current_user.sentences
      render :show
    else
      render json: "Not currently logged in"
    end
  end
end
