@sentences.each do |sentence|
  json.set! sentence.id do
    json.partial! '/api/sentences/sentence', sentence: sentence
  end
end
