<?php
# 00-在响应头信息中说明返回的是xml数据
header("Content-Type: text/xml; charset=UTF-8");

# 01-加载XML文件的数据
$xml = file_get_contents("data.xml");
# 02-返回XML数据
echo $xml;
?>