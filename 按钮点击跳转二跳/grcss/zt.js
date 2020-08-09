/**
 * 获取网页复制动作
 * oncopy="getCopyLog(this,position)"
 * @param string text
 */
function getCopyLog(res,position){
	//<script type="text/javascript" src="public/zt/zt.js"></script>
	//<input type="hidden" id="hosturl" value="{$hosturl}">
	// 以上两句都要复制到页面上
	if(window.getSelection){
		var thisVal = window.getSelection();
	}else{
		var thisVal = document.selection.createRange().text;
	}

	//旧的处理方法
	var data_position = $('.oncopy_position').attr('data-position');
	if(data_position > 0){
		position = data_position;
	}
	
	var res1 = $(res).text();
	/*res1 = $.trim(res1);
    if(res1 != $.trim(thisVal))return;*/

    if(res1 != thisVal)return;

    var position = $.trim(position);
	var host = $('input#hosturl').val();
    if(!thisVal || !position || !host)return;
    
     var convert_id = $('#convert_id').attr('data-convert_id');
    _taq.push({convert_id:convert_id, event_type:"wechat"});
    
    /*
    var url = '/special/getCopyLog';

    $.post(url,{'position':position,'host':host,'wechat':res1},function(res2){
		if(res2.status == 1){
			if($(res).attr('data-toutiao') == 1){
				var convert_id = $('#convert_id').attr('data-convert_id');
				_taq.push({convert_id:convert_id, event_type:"wechat"});
			}
		}
	})*/
}


function getCopyTenc(res,position){
	gdt('track', 'CONSULT');
	//<script type="text/javascript" src="public/zt/zt.js"></script>
	//<input type="hidden" id="hosturl" value="{$hosturl}">
	// 以上两句都要复制到页面上
	if(window.getSelection){
		var thisVal = window.getSelection();
	}else{
		var thisVal = document.selection.createRange().text;
	}

	//旧的处理方法
	var data_position = $('.oncopy_position').attr('data-position');
	if(data_position > 0){
		position = data_position;
	}
	
	var res1 = $(res).text();
	/*res1 = $.trim(res1);
    if(res1 != $.trim(thisVal))return;*/

    if(res1 != thisVal)return;

    var position = $.trim(position);
	var host = $('input#hosturl').val();
    if(!thisVal || !position || !host)return;
    
    
    var convert_id = $('#convert_id').attr('data-convert_id');
    _taq.push({convert_id:convert_id, event_type:"wechat"});
    
    /*
    var url = '/special/getCopyLog';

    $.post(url,{'position':position,'host':host,'wechat':res1},function(res2){
		if(res2.status == 1){
			if($(res).attr('data-toutiao') == 1){
				var convert_id = $('#convert_id').attr('data-convert_id');
				_taq.push({convert_id:convert_id, event_type:"wechat"});
			}
		}
	})*/
}


//对于有n个位置点击弹框后才出现要复制的微信号，并且n个位置点击事件弹的都是同一个框时用
$(function(){
	$('.new_oncopy_position').hide();
	
	$('.open_oncopy_position').each(function(i){
		this.index = i+1+0;
	})
	
	$('.open_oncopy_position').click(function(){
		$('.oncopy_position').attr('data-position',this.index);//旧的处理方法
		
		//新处理方法
		$('.new_oncopy_position').hide();
		var pis = 'index_' + this.index;
		$('#'+pis).show();
	})
})

