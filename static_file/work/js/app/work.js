// 单行提交 保存 译文
// $("a#submits").click(function () {
// // $("#submits").live('click', function () {
//     var i = $(this).parent('td').parent('tr').data('uid');
//     console.log("第" + i + "行")
//     var query = $("tr:eq(" + i + ")").children().eq(3).text()
//     console.log("获取到文本：" + query)
//     var id = $("tr:eq(" + i + ")").children().eq(4).text()
//     console.log("获取到id：" + id)
//     var yiwen = $("tr:eq(" + i + ")").children().eq(6).text().trim()
//     console.log("获取到文本：" + yiwen)
//     $.ajax({
//         method: 'post',
//         url: '/work/' + id + "/" + yiwen + '/change_yiwen/',
//         dataType: "json",
//         data: {"csrfmiddlewaretoken": "{{ csrf_token }}"},
//         success: function (data) {
//             console.log(data);
//             $("#jindu").text(data.jindu);
//             $("#paraing").text(data.paraing);
//             $("#numing").text(data.numing);
//             $("#mt" + id).css('display', 'none');
//             $("#pe" + id).css('display', 'none');
//             $("#dui" + id).css('display', 'block');
//         }
//     });
// });

//单行提交 译文
function submits(obj) {
    var id = obj
    var yiwen = $("#yiwen_show" + obj).text()
    console.log(yiwen)
    $.ajax({
        method: 'post',
        url: '/work/' + id + "/" + yiwen + '/change_yiwen/',
        dataType: "json",
        data: {"csrfmiddlewaretoken": "{{ csrf_token }}"},
        success: function (data) {
            console.log(data);
            $("#jindu").text(data.jindu);
            $("#paraing").text(data.paraing);
            $("#numing").text(data.numing);
            $("#mt" + id).css('display', 'none');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'block');
            console.log('ok')
        }
    });
}

// 每隔5分钟 自动保存一次
$(document).ready(function () {
    setInterval(all_save, 500000);
});

// zhong -ying 单行提交百度机器翻译
// $("a#click").click(function () {
//     var token = $('input[name=csrfmiddlewaretoken]').val();
//     var i = $(this).parent('td').parent('tr').data('uid');
//     console.log("第" + i + "行")
//     var query = $("tr:eq(" + i + ")").children().eq(3).text()
//     console.log("获取到文本：" + query)
//     var id = $("tr:eq(" + i + ")").children().eq(4).text()
//     console.log("获取到id：" + id)
//     var yiwen = $("tr:eq(" + i + ")").children().eq(6).text()
//     console.log("获取到文本：" + yiwen)
//
//     console.log("开始发送ajax请求")
//     $.ajax({
//         url: '/work/bdjson/' + query + "/" + id + "/",
//         method: "POST",
//         dataType: "json",
//         data: {"csrfmiddlewaretoken": token},
//         success: function (data) {
//             console.log(data.msg);
//             $("tr:eq(" + i + ")").children().eq(6).empty()
//             $("tr:eq(" + i + ")").children().eq(6).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
//             $('#yiwen' + id).val(data.msg);
//             $("#mt" + id).css('display', 'block');
//             $("#pe" + id).css('display', 'none');
//             $("#dui" + id).css('display', 'none');
//         }
//     });
// });


// $("a#sgclick").click(function () {
//     var token = $('input[name=csrfmiddlewaretoken]').val();
//     var i = $(this).parent('td').parent('tr').data('uid');
//     console.log("第" + i + "行")
//     var query = $("tr:eq(" + i + ")").children().eq(3).text()
//     console.log("获取到文本：" + query)
//     var id = $("tr:eq(" + i + ")").children().eq(4).text()
//     console.log("获取到id：" + id)
//     var yiwen = $("tr:eq(" + i + ")").children().eq(6).text()
//     console.log("获取到文本：" + yiwen)
//
//     console.log("开始发送ajax请求")
//     $.ajax({
//         url: '/work/sgjson/' + query + "/" + id + "/",
//         method: "POST",
//         dataType: "json",
//         data: {"csrfmiddlewaretoken": token},
//         success: function (data) {
//             console.log(data.msg);
//             $("tr:eq(" + i + ")").children().eq(6).empty()
//             $("tr:eq(" + i + ")").children().eq(6).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
//             $("#yiwen_show"+id).empty();
//             $("#yiwen_show"+id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
//             $('#yiwen' + id).val(data.msg);
//             $("#mt" + id).css('display', 'block');
//             $("#pe" + id).css('display', 'none');
//             $("#dui" + id).css('display', 'none');
//         }
//     });
// });

//  ying -- zhong 百单行提交百度机器翻译
// $("a#enclick").click(function () {
//     var token = $('input[name=csrfmiddlewaretoken]').val();
//     var i = $(this).parent('td').parent('tr').data('uid');
//     console.log("第" + i + "行")
//     var query = $("tr:eq(" + i + ")").children().eq(3).text()
//     console.log("获取到文本：" + query)
//     var id = $("tr:eq(" + i + ")").children().eq(4).text()
//     console.log("获取到id：" + id)
//     var yiwen = $("tr:eq(" + i + ")").children().eq(6).text()
//     console.log("获取到文本：" + yiwen);
//
//     console.log("开始发送ajax请求")
//     $.ajax({
//         url: '/work/en_baidu/' + query + "/" + id + "/",
//         method: "POST",
//         dataType: "json",
//         data: {"csrfmiddlewaretoken": token},
//         success: function (data) {
//             console.log(data.msg);
//             $("tr:eq(" + i + ")").children().eq(6).empty()
//             $("tr:eq(" + i + ")").children().eq(6).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
//             $('#yiwen' + id).val(data.msg);
//             $("#mt" + id).css('display', 'block');
//             $("#pe" + id).css('display', 'none');
//             $("#dui" + id).css('display', 'none');
//         }
//     });
// });

// $("a#sgenclick").click(function () {
//     console.log("这个啊")
//     var token = $('input[name=csrfmiddlewaretoken]').val();
//     var i = $(this).parent('td').parent('tr').data('uid');
//     console.log("第" + i + "行")
//     var query = $("tr:eq(" + i + ")").children().eq(3).text()
//     console.log("获取到文本：" + query)
//     var id = $("tr:eq(" + i + ")").children().eq(4).text()
//     console.log("获取到id：" + id)
//     var yiwen = $("tr:eq(" + i + ")").children().eq(6).text()
//     console.log("获取到文本：" + yiwen)
//
//     console.log("开始发送enajax请求")
//     $.ajax({
//         url: '/work/en_sgjson/' + query + "/" + id + "/",
//         method: "POST",
//         dataType: "json",
//         data: {"csrfmiddlewaretoken": token},
//         success: function (data) {
//             console.log(data.msg);
//             $("tr:eq(" + i + ")").children().eq(6).empty()
//             $("tr:eq(" + i + ")").children().eq(6).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
//             $('#yiwen' + id).val(data.msg);
//             $("#mt" + id).css('display', 'block');
//             $("#pe" + id).css('display', 'none');
//             $("#dui" + id).css('display', 'none');
//         }
//     });
// });


// 单行 --> 百度中译英
function bdzhjson(obj) {
    var id = obj
    var query = $("#yuanwen_change" + obj).text()
    var token = $('input[name=csrfmiddlewaretoken]').val();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/bdjson/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            // $("tr:eq(" + i + ")").children().eq(6).empty()
            // $("tr:eq(" + i + ")").children().eq(6).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}

// 单行 --> 搜狗中译英
function sgzhjson(obj) {
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    var token = $('input[name=csrfmiddlewaretoken]').val();
    $.ajax({
        url: '/work/sgjson/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>")
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}

// 单行 --> 百度英译中
function bdenjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/en_baidu/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}

// 单行 --> 搜狗英译中
function sgenjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/en_sgjson/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}


// 译文 全部提交
$('#all_change').click(function () {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var tab = document.getElementById("history_income_list"); //找到这个表格
    var rows = tab.rows; //取得这个table下的所有行
    // 循环提交 所有行
    for (var i = 1; i < rows.length; i++) {
        var yi = rows[i].cells[4].firstElementChild.innerText;
        // var yi = rows[i].cells[4].textContent.trim();
        var id = rows[i].cells[2].textContent.trim();
        // var id = rows[i].cells[2].innerText;
        console.log(id, yi, '================');
        $("#mt" + id).css('display', 'none');
        $("#pe" + id).css('display', 'none');
        $("#dui" + id).css('display', 'block');
        console.log("#dui" + id + "OK")
        console.log("开始发送ajax请求")
        $.ajax({
            url: '/work/' + id + "/" + yi + '/change_yiwen/',
            method: "POST",
            dataType: "json",
            data: {"csrfmiddlewaretoken": token},
            success: function (data) {
                console.log(data.msg);
                $("#jindu").text("100");
                $("#paraing").text(data.all_para);
                $("#numing").text(data.all_num);
            }
        });
    }
});


function all_save() {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var tab = document.getElementById("history_income_list"); //找到这个表格
    var rows = tab.rows; //取得这个table下的所有行
    // 循环保存所有行
    for (var i = 1; i < rows.length; i++) {
        // 获取每一行第5列的第一个子便签的内容
        var yi = rows[i].cells[4].firstElementChild.innerText;
        var y_id = rows[i].cells[2].innerText;
        console.log(yi);
        console.log("开始发送ajax请求")
        $.ajax({
            url: '/work/all_save_yiwen/' + y_id + "/" + yi + "/",
            method: "POST",
            dataType: "json",
            data: {"csrfmiddlewaretoken": token},
            success: function (data) {
                console.log(data.msg);
                $("#mt" + id).css('display', 'none');
                $("#pe" + id).css('display', 'none');
                $("#dui" + id).css('display', 'block');
            }
        });
    }
}


// 回车原文栏后的翻译获取
// 给原文兰 添加 按钮
function yuanwen_change(obj) {
    id = obj;
    var token = $('input[name=csrfmiddlewaretoken]').val();
    // 发送验证原始原文
    $.ajax({
        url: '/work/yuanwen_check/' + id + "/",
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token},
        success: function (data) {
            console.log("123" + data.msg);
            // 获取原文栏
            var query = $("#yuanwen_change" + id).text()
            console.log("获取到文本11：" + query);
            if (data.msg != query.trim()) {
                console.log("改变了")
                $("#mt" + id).css('display', 'none');
                $("#pe" + id).css('display', 'block');
                $("#dui" + id).css('display', 'none');
                $("#jb" + id).css('display', 'inline-block');
                console.log("开始发送ajax请求");
                $.ajax({
                    url: '/work/change_content/' + query + "/" + id + "/",
                    method: "POST",
                    dataType: "json",
                    data: {"csrfmiddlewaretoken": token},
                    success: function (data) {
                        console.log(data.msg);
                        $("#yiwen_show" + id).text(data.msg)
                        $("a#change_befor" + id).css('display', "block")
                        $('#yiwen' + id).val(data.msg);
                        $('#change_old' + id).css('display', "none")
                    }
                })
            } else {
                console.log("未修改")
            }
        }
    })
}


function yiwen_change(obj) {
    id = obj;
    yiwen = $("#yiwen_show" + id + "").text();
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var language_type = $("#language_type").val()
    if (language_type == 'de_zh'){
        language_type = 'zh-CN'
    }
    else if (language_type == 'de_en'){
        language_type = 'en-US'
    }
    form_list = {csrfmiddlewaretoken: token};
    form_list['yiwen'] = yiwen;
    form_list['language_type'] = language_type;
    console.log(form_list);
    // 发送验证译文是否书写正确
    $.ajax({
        url: '/work/yiwen_check_is_True/',
        method: 'POST',
        dataType: 'json',
        data: form_list,
        success: function (data) {
            if (data.code >= 0) {
                if (data.code == 0) {
                    // 代表返回 有错误的书写
                    console.log(data)
                    i = 0
                    while (i < data.data.length) {
                        var title = data.right_text
                        yiwen = yiwen.replace(data.data[i], '<font color="red" class="language'+id+'" >' + data.data[i] + '</font>')
                        // text = '<font color=red>'+ data.data[i] +'</font>'
                        // $(".language"+id).attr('title', title)
                        // console.log(yiwen)
                        html = '<span data-toggle="tooltip" data-placement="left" title="这句正确的可能是：'+ title +'">' + yiwen + '</span>'
                        $("#yiwen_show" + id + "").html(html)
                        i += 1
                    }
                } else if (data.code == 1) {
                    // 代表返回 没有书写错误
                    console.log('没有书写错误')
                    $("#yiwen_show" + id + "").html(yiwen)
                }
            } else {
                alert(data.msg)
            }
        }
    });
    // 发送验证原始原文
    $.ajax({
        url: '/work/yiwen_check/' + id + "/",
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token},
        success: function (data) {
            console.log("123" + data.msg);
            // 获取原文栏
            var query = $("#yiwen_show" + id).text()
            console.log("获取到文本11：" + query);
            if (data.msg != query.trim()) {
                console.log("改变了")
                $("#mt" + id).css('display', 'none');
                $("#pe" + id).css('display', 'block');
                $("#dui" + id).css('display', 'none');
                $("#yiwen" + id).val(query)
            }
        }
    })
}
// 百度德-中
function bd_de_zhjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/bd_de_zh/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}


// 百度德-英
function bd_de_enjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/bd_de_en/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}


// 搜狗德-中
function sg_de_zhjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/sg_de_zh/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}

// 搜狗德-英
function sg_de_enjson(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var id = obj;
    var query = $("#yuanwen_change" + obj).text();
    console.log(id + query + "开始发送ajax请求")
    $.ajax({
        url: '/work/sg_de_en/',
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token, 'query':query},
        success: function (data) {
            console.log(data.msg);
            $("#yiwen_show" + id).empty();
            $("#yiwen_show" + id).append("<div class='textarea' id='yiwen_show{{y.id}}' contenteditable='true' onblur=\"console.log(document.getElementById('yiwen{{y.id}}').value=this.innerText);\">" + data.msg + "</div>");
            $('#yiwen' + id).val(data.msg);
            $("#mt" + id).css('display', 'block');
            $("#pe" + id).css('display', 'none');
            $("#dui" + id).css('display', 'none');
        }
    });
}

function change_befor(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    id = obj;
    console.log("x获取到id：" + id);
    console.log("开始发送ajax请求");
    $.ajax({
        url: '/work/change_befor/' + id + "/",
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token},
        success: function (data) {
            console.log(data.msg);
            console.log(data.msg[0])
            $("a#change_befor" + id).css('display', "none");
            $("a#change_old" + id).css('display', "block");
            $('#yiwen' + id).val(data.msg[0]);
            $('#yuanwen_change' + id).text(data.msg[1])
            $('#yiwen_show' + id).text(data.msg[0]);
            $("#jb" + id).css('display', "none");
            $("#jb_old" + id).css('display', "block");
        }
    })
}


function change_old(obj) {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    id = obj;
    console.log("x获取到id：" + id);
    console.log("开始发送ajax请求");
    $.ajax({
        url: '/work/change_old/' + id + "/",
        method: "POST",
        dataType: "json",
        data: {"csrfmiddlewaretoken": token},
        success: function (data) {
            console.log(data.msg);
            console.log(data.msg[0])
            $('#yiwen' + id).val(data.msg[0]);
            $('#yiwen' + id).val(data.msg[0]);
            $('#yuanwen_change' + id).text(data.msg[1])
            $('#yiwen_show' + id).text(data.msg[0])
            $("a#change_old" + id).css('display', "none");
            $("a#change_befor" + id).css('display', "block");
            $("#jb" + id).css('display', "block");
            $("#jb_old" + id).css('display', "none");
        }
    })
}

// 查找替换
function tihuan() {
    var Ot1 = document.getElementById("yuan").value;
    console.log(Ot1);
    var Ot2 = document.getElementById("tihuan").value;
    console.log(Ot2);
    var tab = document.getElementById("history_income_list"); //找到这个表格
    var rows = tab.rows; //取得这个table下的所有行
    for (i = 0; i < rows.length; i++) {
        var count = rows[i].cells[0].getElementsByClassName('yuanwen_change')[0].innerHTML;
        var n = count.split(Ot1).join("<font color='red'>" + Ot2 + "</font>");
        rows[i].cells[0].getElementsByClassName('yuanwen_change')[0].innerHTML = n;
    }
}

function submit(obj, en) {
    yuan = $("#yuan").val();
    tihuan = $("#tihuan").val();
    p = "";
    console.log(yuan, tihuan);
    if (yuan.length > 0 && tihuan.length > 0) {
        var token = $('input[name=csrfmiddlewaretoken]').val();
        form_list = {csrfmiddlewaretoken: token};
        f_id = obj;
        form_list['f_id'] = f_id;
        form_list['yuan'] = yuan;
        form_list['tihuan'] = tihuan;
        console.log(form_list);
        var Ot1 = document.getElementById("yuan").value;
        console.log(Ot1);
        var Ot2 = document.getElementById("tihuan").value;
        console.log(Ot2);
        var tab = document.getElementById("history_income_list"); //找到这个表格
        var rows = tab.rows; //取得这个table下的所有行
        for (i = 1; i < rows.length - 1; i++) {
            var count = rows[i].cells[1].getElementsByClassName('yuanwen_change')[0].innerHTML;
            var qqq = count.split(Ot1).join(Ot2);
            var n = count.split(Ot1).join("<font color='red'>" + Ot2 + "</font>");
            console.log("原文：", count);
            console.log("不加颜色的", qqq);
            console.log("加颜色的", n);
            if (count != qqq) {
                rows[i].cells[1].getElementsByClassName('yuanwen_change')[0].innerHTML = n;
                default_from_list = {csrfmiddlewaretoken: token};
                default_from_list['query'] = qqq;
                console.log(default_from_list);
                console.log(i);
                pi = i + '、';
                p += pi;
                console.log("第几段" + p);
                if (en == 0) {
                    default_trans(i, default_from_list);
                } else {
                    endefault_trans(i, default_from_list);
                }
                console.log("他OK了？")
            } else {
                console.log("没替换")
            }
        }
        $.ajax({
            url: '/work/tihuan_yuanwen/',
            method: "POST",
            dataType: "json",
            data: form_list,
            success: function (data) {
                if (data.code == 0) {
                    console.log(data);
                    $("#tihuan_msg").empty();
                    $("#tihuan_msg").html("<span style='color:#A9A9A9;' class='glyphicon glyphicon-bullhorn' aria-hidden='true'>&nbsp;&nbsp;&nbsp;</span><span style='color:green;'>分别把第" + p + "段中的: " + yuan + " 替换成： " + tihuan + " 。</span>");
                    // all_save();
                } else {
                    $("#tihuan_msg").empty();
                    $("#tihuan_msg").html("<span style='color:red;'>" + data.msg + "</span>");
                    console.log(data)
                }
            }
        })
    } else {
        alert("请正确填写")
    }
}

function default_trans(i, default_from_list) {
    console.log(i, default_from_list);
    var tab = document.getElementById("history_income_list"); //找到这个表格
    var rows = tab.rows; //取得这个table下的所有行
    // 默认替换后修改译文
    $.ajax({
        url: '/work/default_translation/',
        method: "POST",
        dataType: "json",
        data: default_from_list,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                console.log(data.data);
                rows[i].cells[4].getElementsByClassName('yiwen_change')[0].innerHTML = data.data;
                console.log(rows[i].cells[4])
            } else {
                console.log(data.msg)
            }
        }
    })
}


function endefault_trans(i, default_from_list) {
    console.log(i, default_from_list);
    var tab = document.getElementById("history_income_list"); //找到这个表格
    var rows = tab.rows; //取得这个table下的所有行
    // 默认替换后修改译文
    $.ajax({
        url: '/work/endefault_translation/',
        method: "POST",
        dataType: "json",
        data: default_from_list,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                console.log(data.data);
                rows[i].cells[4].getElementsByClassName('yiwen_change')[0].innerHTML = data.data;
                console.log(rows[i].cells[4])
            } else {
                console.log(data.msg)
            }
        }
    })
}

function yiwen_submit(obj) {
    yuan = $("#yiwen_yuan").val();
    tihuan = $("#yiwen_tihuan").val();
    p = "";
    console.log(yuan, tihuan);
    if (yuan.length > 0 && tihuan.length > 0) {
        var token = $('input[name=csrfmiddlewaretoken]').val();
        form_list = {csrfmiddlewaretoken: token};
        f_id = obj
        form_list['f_id'] = f_id;
        form_list['yiwen_yuan'] = yuan;
        form_list['yiwen_tihuan'] = tihuan;
        // document.getElementById("all_change").click();
        console.log(form_list);
        var Ot1 = document.getElementById("yiwen_yuan").value;
        console.log(Ot1);
        var Ot2 = document.getElementById("yiwen_tihuan").value;
        console.log(Ot2);
        var tab = document.getElementById("history_income_list"); //找到这个表格
        var rows = tab.rows; //取得这个table下的所有行
        for (i = 1; i < rows.length - 1; i++) {
            var count = rows[i].cells[4].getElementsByClassName('yiwen_change')[0].innerHTML;
            var qqq = count.split(Ot1).join(Ot2);
            var n = count.split(Ot1).join("<font color='red'>" + Ot2 + "</font>");
            console.log("原文：", count);
            console.log("不加颜色的", qqq);
            console.log("加颜色的", n);
            if (count != qqq) {
                rows[i].cells[4].getElementsByClassName('yiwen_change')[0].innerHTML = n;
                pi = i + '、';
                p += pi;
                console.log("第" + i + "段")
            } else {
                console.log("没替换")
            }
        }
        $.ajax({
            url: '/work/tihuan_yiwen/',
            method: "POST",
            dataType: "json",
            data: form_list,
            success: function (data) {
                if (data.code == 0) {
                    console.log(data);
                    $("#yiwen_tihuan_msg").empty();
                    $("#yiwen_tihuan_msg").html("<span style='color:#A9A9A9;' class='glyphicon glyphicon-bullhorn' aria-hidden='true'>&nbsp;&nbsp;&nbsp;</span><span style='color:green;'>分别把第" + p + "段中的: " + yuan + " 替换成： " + tihuan + " 。</span>");
                } else {
                    $("#yiwen_tihuan_msg").empty();
                    $("#yiwen_tihuan_msg").html("<span style='color:red;'>" + data.msg + "</span>");
                    console.log(data)
                }
            }
        })
    } else {
        alert("请正确填写")
    }
}

function off() {
    $("#yiwen_tihuan_msg").empty();
    $("#tihuan_msg").empty();
}

function downloads(file_id) {
    var domain = document.domain;
    var token = $('input[name=csrfmiddlewaretoken]').val();
    console.log(file_id, token);
    $.ajax({
        url: '/work/downloads/' + file_id + '/',
        method: "POST",
        dataType: "json",
        data: {'csrfmiddlewaretoken': token},
        success: function (data) {
            if (data.code == 0) {
                url = domain + '/' + data.data;
                var $eleForm = $("<form method='get'></form>");
                $eleForm.attr("action", "http://" + url);
                $(document.body).append($eleForm);
                //提交表单，实现下载
                $eleForm.submit();
            } else {
                alert(data.msg)
            }

        }
    })
}


function shuangyu_downloads(file_id) {
    var domain = document.domain;
    var token = $('input[name=csrfmiddlewaretoken]').val();
    console.log(file_id);
    $.ajax({
        url: '/work/shuangyu_downloads/' + file_id + '/',
        method: "POST",
        dataType: "json",
        data: {'csrfmiddlewaretoken': token},
        success: function (data) {
            if (data.code == 0) {
                url = domain + '/' + data.data;
                var $eleForm = $("<form method='get'></form>");
                $eleForm.attr("action", "http://" + url);
                $(document.body).append($eleForm);
                //提交表单，实现下载
                $eleForm.submit();
            } else {
                alert(data.msg)
            }
        }
    })
}

/*$(document).ready(function () {
    file_id = $("#file_id").val();
    var token = $('input[name=csrfmiddlewaretoken]').val();
    form_list = {csrfmiddlewaretoken: token};
    form_list['file_id'] = file_id;
    $.ajax({
        url: '/work/api/v1/get_work_data/',
        method: "POST",
        dataType: "json",
        data: form_list,
        success: function (data) {
            if (data.code == 0) {
                title = '<tr class="active">' +
                    '<th>句段</th>' +
                    '<th class="yuanwen">原文栏</th>' +
                    '<th>状态</th>' +
                    '<th class="yiwen">译文栏</th>' +
                    '<th>MT选择</th>' +
                    '<th>提交</th>' +
                    '</tr>';
                $("#history_income_list").append(title);
                console.log(typeof (data.data.yuan));
                ret_yuan = JSON.parse(data.data.yuan);
                ret_yi = JSON.parse(data.data.yi);
                a = 0;
                while (a < ret_yuan.length) {
                    // console.log(ret_yuan[a].pk);
                    // console.log(ret_yuan[a].fields.yuanwen);
                    // console.log(ret_yi[a].pk);
                    // console.log(ret_yi[a].fields.yiwen_wait_over);
                    // console.log( a + 1);
                    tr = tr = '<tr data-uid=a+1>' +
                        '<form>{% csrf_token %}' +
                        '<td>'+a+'</td> ' +
                        '<td id="yuanwen" class="yuanwen" name="yuanwen" style="text-align: left;"style="position:relative;">'+
                        '<a href="javascript:void(0);" style="display: none;" class="change_befor" onclick="change_befor('+ ret_yuan[a].pk +')" id="change_befor'+ ret_yuan[a].pk +'">' +
                        '<i class="jb" id="'+ ret_yuan[a].pk +'"></i>' +
                        '</a>' +
                        '<a href="javascript:void(0);" style="display: none;" class="change_old" onclick="change_old('+ ret_yuan[a].pk +')" id="change_old'+ ret_yuan[a].pk +'">' +
                        '<i class="jb-old" id="jb_old'+ ret_yuan[a].pk +'"></i>' +
                        '</a>' +
                        '<div class="textarea yuanwen_change" id="yuanwen_change'+ ret_yuan[a].pk +'" contenteditable="true" onblur="yuanwen_change('+ ret_yuan[a].pk +')">'+ ret_yuan[a].fields.yuanwen +'</div>' +
                        '</td>' +
                        '<td hidden="hidden">'+ ret_yuan[a].pk +'</td>' +
                        '<td>' +
                        '<!--this this this this -->'+
                        '<span id="mt'+ ret_yuan[a].pk +'" style="display: block;">MT</span>' +
                        '<span id="pe'+ ret_yuan[a].pk +'" style="display: none;">PE</span>' +
                        '<span id="dui'+ ret_yuan[a].pk +'" style="display: none;color: green;vertical-align: middle;text-align: center;">√</span>' +
                        '<!--<a href="javascript:void(0);" style="display: none;" class="change_befor" onclick="change_befor({{ f.id }})" id="change_befor{{ f.id }}">修改前</a>-->' +
                        '<!--<a href="javascript:void(0);" style="display: none;" class="change_old" id="change_old{{ f.id }}">修改后</a>-->' +
                        '</td>' +
                        '<input type="text" value="'+ ret_yi[a].pk +'" name="yiwen_id" hidden>' +
                        '<td id="yiwen" class="yiwen" style="text-align: left;">' +
                        '<div class="textarea yiwen_change" id="yiwen_show'+ ret_yuan[a].pk +'"contenteditable="true" onblur="yiwen_change('+ ret_yuan[a].pk +')">'+ ret_yi[a].fields.yiwen_wait_over +'</div>' +
                        '</td>' +
                        '<td>' +
                        '<a href="javascript:void(0);" id="click" >百度翻译</a>' +
                        '<a href="javascript:void(0);" id="sgclick">搜狗翻译</a>' +
                        '</td>' +
                        '<td hidden="hidden">' +
                        '<input type="text" name="yiwen" id="yiwen'+ ret_yuan[a].pk +'" value="'+ret_yi[a].fields.yiwen_wait_over+'">' +
                        '</td>' +
                        '<td>' +
                        '<a class="button btn btn-default" id="submits">提交</a>' +
                        '</td>' +
                        '</form>' +
                        '</tr>';
                    $("#history_income_list").append(tr)
                    a += 1;
                }
            } else {
                alert(data.code);
            }
        }
    })
});*/

/*
                title = '<table id="history_income_list" class="table table-striped table-bordered table-hover table-responsive">' +
                    '<tr class="active">' +
                    '<th>句段</th>' +
                    '<th class="yuanwen">原文栏</th>' +
                    '<th>状态</th>' +
                    '<th class="yiwen">译文栏</th>' +
                    '<th>MT选择</th>' +
                    '<th>提交</th>' +
                    '</tr>';

 */

/*
tr ='<tr data-uid=a+1>' +
        '<form>{% csrf_token %}' +
        '<td>a+1</td> ' +
        '<td id="yuanwen" class="yuanwen" name="yuanwen" style="text-align: left;"style="position:relative;">' +
            '<a href="javascript:void(0);" style="display: none;" class="change_befor" onclick="change_befor({{ f.id }})" id="change_befor{{ f.id }}">' +
                '<i class="jb" id="jb{{f.id}}"></i>' +
            '</a>' +
            '<a href="javascript:void(0);" style="display: none;" class="change_old" onclick="change_old({{ f.id }})" id="change_old{{ f.id }}">' +
                '<i class="jb-old" id="jb_old{{f.id}}"></i>' +
            '</a>' +
            '<div class="textarea yuanwen_change" id="yuanwen_change{{ f.id }}" contenteditable="true" onblur="yuanwen_change({{ f.id }})">{{f.yuanwen}}</div>' +
        '</td>' +
        '<td hidden="hidden">{{f.id}}</td>' +
        '<td>' +
            '<span id="mt{{ f.id }}" style="display: block;">MT</span>' +
            '<span id="pe{{ f.id }}" style="display: none;">PE</span>' +
            '<span id="dui{{ f.id }}" style="display: none;color: green;vertical-align: middle;text-align: center;">√</span>' +
            '<!--<a href="javascript:void(0);" style="display: none;" class="change_befor" onclick="change_befor({{ f.id }})" id="change_befor{{ f.id }}">修改前</a>-->' +
            '<!--<a href="javascript:void(0);" style="display: none;" class="change_old" id="change_old{{ f.id }}">修改后</a>-->' +
        '</td>' +
        '<input type="text" value="{{y.id}}" name="yiwen_id" hidden>' +
        '<td id="yiwen" class="yiwen" style="text-align: left;">' +
            '<div class="textarea yiwen_change" id="yiwen_show{{ f.id }}"contenteditable="true" onblur="yiwen_change({{f.id}})">{{y.yiwen_wait_over}}</div>' +
        '</td>' +
        '<td>' +
            '<a href="javascript:void(0);" id="click">百度翻译</a>' +
            '<a href="javascript:void(0);" id="sgclick">搜狗翻译</a>' +
        '</td>' +
        '<td hidden="hidden">' +
            '<input type="text" name="yiwen" id="yiwen{{y.id}}" value="{{y.yiwen_wait_over}}">' +
        '</td>' +
        '<td>' +
            '<a class="button btn btn-default" id="submits">提交</a>' +
        '</td>' +
        '</form>' +
        '</tr>';
 */
$(document).ready(function () {
    var token = $('input[name=csrfmiddlewaretoken]').val();
    var sitv = setInterval(function () {
        id = $("#file_id").val();
        $.ajax({
            url: '/work/get_progress_num/' + id + "/",
            method: "POST",
            dataType: "json",
            data: {"csrfmiddlewaretoken": token},
            success: function (data) {
                if (data.code == 0) {
                    $('#pro_num').css('width', data.data + '%');
                } else {
                    console.log(data.data)
                }
                if (data.data === '100.0') {
                    clearInterval(sitv);
                    $("#progress").css('display', 'none')
                    $("#dropdownMenu1").removeAttr('disabled');
                    $("#dropdownMenu1").removeAttr('title');
                    $.ajax({
                        url: '/work/get_detail_num/' + id + "/",
                        method: "POST",
                        dataType: "json",
                        data: {"csrfmiddlewaretoken": token},
                        success: function (data) {
                            console.log(data)
                            if(data.count === 1){
                                tc(data.num)
                            }
                        }
                    })
                }
            }
        });
    }, 1000);
});


// function show_true_language(obj) {
//     yiwen = $("#yiwen_show" + id + "").text();
//     var token = $('input[name=csrfmiddlewaretoken]').val();
//     var language_type = $("#language_type").val()
//     form_list = {csrfmiddlewaretoken: token};
//     form_list['yiwen'] = yiwen;
//     form_list['language_type'] = language_type;
//     console.log(form_list);
//     console.log(obj)
//     var html = '<span id="true_info'+ obj +'" style="color: dodgerblue;">这是对的</span>'
//     $("#language"+obj).append(html)
// }
//
// function del_true_info(obj) {
//      var parent=document.getElementById("language"+obj);
//      var son=document.getElementById("true_info"+obj);
//      parent.removeChild(son);
// }

function tc(obj) {
    html = '<div id="tan"><p>全部预翻译完成！</p><p>匹配到语料库：'+ obj +' 句！</p></div>'
    $("body").append(html)
    $('#tan').delay(3000).hide(0);
}

