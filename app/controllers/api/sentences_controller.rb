class Api::SentencesController < ApplicationController
  def index
    @sentences = Word.find_by(id: params[:word_id]).sentences
    render :index
  end

  def show
    @sentence = Sentence.find_by(id: params[:id])
    render :show
  end

  def update
    @sentence = Sentence.find_by(id: params[:id])

    if @sentence.update_attributes(sentence_params)
      render :show
    else
      render json: @sentence.errors.full_messages, status: 422
    end
  end

  def destroy
    @sentence = Sentence.find_by(id: params[:id])

    if @sentence.delete
      render :show
    else
      render json: "Could not delete this sentence"
    end
  end

  private
  def sentence_params
    params.require(:sentence).permit(:sentence)
  end
end
