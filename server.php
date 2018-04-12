<?php
 
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$results = "./data/results/";
$questionnaire = "./data/questionnaire/";
$metrics = "./data/metrics/";

function getCurrentId(){
  if(!file_exists("./data/counter.txt")){
    return false;
  }
  if(!$fd = fopen("./data/counter.txt", "r+")){
    return false;
  }
  $count = fgets($fd);
  $count = $count+1;
  fseek($fd, 0);
  fputs($fd, $count);
  fclose($fd);
  return $count;
}

function saveResults($fileName, $data){
  $fd = fopen($fileName, "w");
  fwrite($fd, $data);
  fclose($fd);
}


function decorateName($num){
  if ($num < 10){
    return "bad00".$num.".json";
  } else if($num < 100){
    return "bad0".$num.".json";
  } else {
    return "bad".$num.".json";
  }
}

function save(){

} 
 
// create SQL based on HTTP method
switch ($method) {
  case 'GET':
    break;
  case 'PUT':
    break;
  case 'POST':
    $fileName = decorateName(getCurrentId());

    $entityBody = file_get_contents('php://input');
    $json = json_decode($entityBody, true);

    //print($entityBody);
    print(json_encode($json["sounds"]));

    saveResults($results.$fileName, json_encode($json["sounds"]));
    saveResults($questionnaire.$fileName, json_encode($json["questionaire"]));
    saveResults($metrics.$fileName, json_encode($json["metrics"]));

    break;
  case 'DELETE':
    break;
}

http_response_code(200);

?>