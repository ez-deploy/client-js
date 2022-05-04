由于swagger本身存在bug，需要手动修正生成的代码，修复方式为：
```
if \(typeof define === 'function' && define.amd\) \{[\n\r]*.*[\n\r]*.*[\n\r]  \} else 
```
复制上方代码进入vscode，将匹配到的部分替换为空即可