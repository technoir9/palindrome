module.exports = Phrase;

// Add 'reverse' method to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Add 'blank' method to all strings
String.prototype.blank = function() {
  return !!this.match(/^\s+$/);
}

// Add 'last' method to all arrays
Array.prototype.last = function() {
  return this.slice(-1);
}

// Returns the username and domain of an email address
function emailParts(email) {
  return email.split('@');
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns all-caps version of the content
  this.louder = function() {
    return this.content.toUpperCase();
  }

  // Returns the letters in the content
  this.letters = function letters() {
    return this.content;    // stub return value
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

    // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
