import article_parser
title, content = article_parser.parse(url="https://www.thewrap.com/best-feel-good-movies-of-2022/", output='markdown', timeout=8)
print(title)
print('----------------')
print(content)