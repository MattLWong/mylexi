class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token

  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true

  has_many :words, dependent: :destroy

  has_many :word_follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :WordFollow

  has_many :followed_words,
    through: :word_follows,
    source: :word

  has_many :sentences, dependent: :destroy

  has_many :sentence_likes

  has_many :liked_sentences,
    through: :sentence_likes,
    source: :sentence

  has_many :in_follows,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :out_follows,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :in_follows,
    source: :follower

  has_many :followees,
    through: :out_follows,
    source: :followee


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
