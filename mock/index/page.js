module.exports = function() {
    this.set("Content-Type", "application/json");
    var value = { total: 1000, resultList: [] };
    var l = Math.round(Math.random() * 10);
    for (var i = 0; i < l; i++) {
        var item = {
            "id": "id" + i,
            "name": "name" + i,
            "account": "account" + i,
            "groupName": "groupName" + i,
            "regDate": 1537426114857 + i,
            "status": i % 3 - 1,
            "type": i % 2 == 0,
            "attentionFlag": i % 2 == 0,
        };
        value.resultList.push(item);
    }

    var result = { success: 1, value };
    this.response.body = JSON.stringify(result);
}
