json.extract! sentence, :id, :word_id, :user_id, :sentence, :created_at

json.word sentence.word.word
json.user_picture sentence.user.image_url
