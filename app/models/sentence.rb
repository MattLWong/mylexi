class Sentence < ApplicationRecord
  validates :word, :user, presence: true

  belongs_to :word
  belongs_to :user

  has_many :sentence_likes

  has_many :likers,
    through: :sentence_likes,
    source: :user
end
