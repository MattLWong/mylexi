class Api::WordsController < ApplicationController
  def index
    @words = Word.all
    render :index
  end

  def create
    @word = Word.new(word_params)
    if @word.save
      render :show
    else
      render json: @word.errors.full_messages, status: 422
    end
  end

  def show
    @word = Word.find_by(id: params[:id])
    if @word
      render :show
    else
      render json: "Word not found"
    end
  end

  def update
    @word = Word.find_by(id: params[:id])

    if @word.update_attributes(word_params)
      render :show
    else
      render json: "Could not edit word"
    end
  end

  def destroy
  end

  private
  def word_params
    params.require(:word).permit(:word, :user_id, :primary_definition, :pos_one, :secondary_definition, :pos_two, :tertiary_definition, :pos_three)
  end
end
