# Отправка события и в Метрику и в Аналитику

```
Goal.reach('magic');
```

# Установка

```composer require akiyatkin/goal:~1```

# При успешной отправке формы c infrajs

Проверяет успешность отправки формы по ключу layer.config.ans.result от расширения infrajs/layer-onsubmit.

У слоя форма должна автоматически отправляться onsubmit=true и в свойстве goal указан id для javascript события, которое будет зафиксировао при успешной отправке и в Яндекс и в Google