    tell application "Terminal"
        repeat with f in input
            do script "node " & quoted form of (POSIX path of f)
        end repeat
        activate
    end tell