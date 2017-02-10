require 'bundler'
Bundler.require(:default, :test)

require 'json'
require 'open-uri'
require_all 'app'

RAKE_APP ||= Rake.application
