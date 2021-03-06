/**
 * js正则 regexp对象(js中，RegExp对象表示正则表达式)
 * 1.修饰符/.../?     ?就是修饰符，值有三个（i：不区分大小写，g：全局搜索，m：多行匹配）
 * 2.方括号[···] [asd]--表示查找方括号里面的任何字符  [0-9]0-9的任意数字  （a12|b23|c45）任意指定的选项
 * 3.元字符  \w|\W 单词字符（非...） \d|\D 数字（非数字） \s|\S 空白字符（非...） \b|\B 单词边界（非） \0 NUL字符
 *   \n换行符 \f换页符 \r回车符 \t制表符  \v垂直制表符
 * 4.量词 +至少一个字符串 *零个或多个  ？零个或者一个   {x}x个 {x，y}x至y个  ^n n$以n开头，以n结尾  ?=n匹配其后紧接字符串n的字符串  ?!n匹配没有紧接字符串n的字符串
 */
//RegExp对象方法 exec test

//exec: regexp.exec(str)   //返回检索的结果或者为null
var str = "hello world";
var patt = new RegExp(/w/,"g");
var result = patt.exec(str); //w
var lastindex = patt.lastIndex; //7

//test: regexp.text(str)  //返回true或者false
var str1 = "Hello world";
var patt1 = new RegExp(/hello/,"i");
var result1 = patt1.test(str1); //true

//search str.search(regexp) //返回index（第一个），如果找不到就是-1
var str2 = "Hello world";
var result2 = str2.search(/w/g); //6

//match str.match(regexp) //返回检索到的，以array形式，没有的话就是空
var str3 = "H1ello w1orld";
var result3 = str3.match(/\w\d/g); //[H1,w1]