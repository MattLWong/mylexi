class Word < ApplicationRecord
  belongs_to :user
  has_many :sentences

  has_many :word_follows
  has_many :followers,
    through: :word_follows,
    source: :follower
end
