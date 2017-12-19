class Word < ApplicationRecord
  validates :pos_one, inclusion: { in: %w(noun verb adjective adverb expression other), message: " is not a valid part of speech" }

  belongs_to :user
  has_many :sentences

  has_many :word_follows
  has_many :followers,
    through: :word_follows,
    source: :follower
end
