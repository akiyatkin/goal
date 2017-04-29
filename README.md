# Отправка события и в Метрику и в Аналитику

```
Goal.reach('magic');
```

# Установка

```composer require akiyatkin/goal:~1```

# Установка счётчиков Google.Analytics и Яндекс.Метрика
В настройках Метрики неважно стоит ли отметка "Отслеживание хеша в адресной строке браузера"
Под добавленными счётчиками нужно добавить вызов, domready опционально.

```js
<script>
  domready( function () {
    Goal.ajax();
  });
</script>
```

# При успешной отправке формы c infrajs
Проверяет успешность отправки формы по событию Layer.onsubmit от расширения infrajs/layer-onsubmit. У слоя форма должна автоматически отправляться onsubmit=true и в свойстве goal указан id для javascript события, которое будет зафиксировао при успешной отправке и в Яндекс и в Google
