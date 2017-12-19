@sentences.each do |sentence|
  json.set! sentence.id do
    json.partial! 'sentence', sentence: sentence
  end
end
