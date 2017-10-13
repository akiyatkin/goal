# Отправка события и в Метрику и в Аналитику

```
Goal.reach('magic');
```

# Установка через composer

```composer require akiyatkin/goal:~1```

Подключить javascript-файлы в ваш сборщик скриптов или через тег script
- vendor/infrajs/hash/Hash.js
- vendor/infrajs/once/Once.js
- vendor/infrajs/sequence/Sequence.js
- vendor/akiyatkin/goal/Goal.js

# Установка через composer с infrajs
```composer require akiyatkin/goal:~1```

Скрипты подключатся автоматически.

# Установка счётчиков Google.Analytics и Яндекс.Метрика
В настройках Метрики не должно быть отметки "Отслеживание хеша в адресной строке браузера"
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
