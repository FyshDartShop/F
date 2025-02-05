function enlargeImage(Url,width,height)
{
var enlarged = new Image(); enlarged.src = ''+Url+''
var prevW = window.open("","newWin","width="+width+",height="+height+",top=140,left=200,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0"); 
prevW.document.write('<html><head><title>Preview Image</title><style type="text/css">body{margin: 0px; padding:0px;} img{margin: 0px; padding: 0px;}</style></head><body><img alt="Click to Close" title="Click to Close" style="border: 0px; padding: 0px;" src="'+Url+'" width="'+width+ '" height="'+height+'" onClick="javascript:window.close();" /></body></html>');
}
