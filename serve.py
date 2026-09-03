#!/usr/bin/env python3
"""Локальный просмотр DARI LOVE без кеша.

`python3 -m http.server` отдаёт Last-Modified, и браузер оставляет у себя
старые css/js рядом с новым html. Смешанный кеш ломает страницу молча:
старый скрипт спотыкается об удалённый узел и умирает раньше, чем повесит
обработчик на возрастной гейт, — кнопка «Мне есть 18» перестаёт работать.

Этот сервер запрещает кеширование, поэтому обычная перезагрузка всегда
показывает то, что лежит на диске.

    python3 serve.py [порт]
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
    handler = partial(NoCacheHandler, directory=str(ROOT))
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        print(f"DARI LOVE: http://localhost:{port} (без кеша)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
