# Beror running npm start
1. Enable legacy OpenSSL provider.
### On Unix-like (Linux, macOS, Git bash, etc.):
- export NODE_OPTIONS=--openssl-legacy-provider
### On Windows command prompt:
-set NODE_OPTIONS=--openssl-legacy-provider
### On PowerShell:
- $env:NODE_OPTIONS = "--openssl-legacy-provider"
