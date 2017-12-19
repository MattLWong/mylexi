class Api::FeedsController < ApplicationController
  def index
    # @sentences = current_user.sentences
    render :show
  end
end
