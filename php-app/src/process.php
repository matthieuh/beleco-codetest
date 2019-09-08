<?php

include 'database.php';

$query = http_build_query([
    'q' => 'language:javascript',
    'sort' => 'stars',
    'order' => 'desc',
    'page' => '1'
]);

$url = 'https://api.github.com/search/repositories?' . $query;

$curl = curl_init($url);

curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);

$response = curl_exec($curl);

curl_close($curl);

$json = json_decode($response);
$repos = $json->items;


foreach ($repos as $intKey => $repo) {
    $statement = $dbo->prepare("INSERT INTO trending_repos(id, full_name, description, language, watchers_count, html_url)
            VALUES(:id, :full_name, :description, :language, :watchers_count, :html_url)");
    $statement->execute(array(
        "id" => $repo->id,
        "full_name" => $repo->full_name,
        "description" => $repo->description,
        "language" => $repo->language,
        "watchers_count" => $repo->watchers_count,
        "html_url" => $repo->html_url
    ));
}