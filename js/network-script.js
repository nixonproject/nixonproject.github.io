/**
 * Created by danielhuang on 12/7/17.
 */
function switchNetworkTab(currentTab,tab){
    $("#"+tab).addClass('active');
    $("#"+currentTab).removeClass('active');
    $(this).removeClass('active');
}