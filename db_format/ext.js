var result = db.origin.find({"aesni": {$ne: ""}}, {
  "model": 1,
  "http_User-Agent": 1,
  "aesni": 1,
  "aes": 1,
  "montecarlo": 1
});
DBQuery.shellBatchSize = result.count();
shellPrint(result);
