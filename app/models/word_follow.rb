class WordFollow < ApplicationRecord
  validates :follower_id, uniqueness: { scope: :word }

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :word
end
