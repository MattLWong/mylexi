@word.each do |word|
  json.set! word.id do
    json.partial! 'word', word: word
  end
end
