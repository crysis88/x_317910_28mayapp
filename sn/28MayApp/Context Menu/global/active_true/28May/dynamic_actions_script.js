/* 
 * Application : 28MayApp
 * ClassName   : sys_ui_context_menu
 * Created On  : 2019-05-28 05:45:19
 * Created By  : admin
 * Updated On  : 2019-05-28 05:45:19
 * Updated By  : admin
 * URL         : /sys_ui_context_menu.do?sys_id=172686ff4f213300a3cc121f9310c75f
 */
/** 
 * This server-side script is used to dynamically create actions for the context menu, such as the list of available templates 
 * 
 * The following variables are available to the script: 
 *    'g_tableName' the name of the current table 
 *    'g_listId' the id of the list we are building the context menu for 
 *    'g_itemName' the name of the UI Context Menu item we are building 
 *    'g_itemOrder' the order defined in the UI Context Menu item we are building 
 * 
 * Add items to the context menu by calling: 
 *    g_contextMenu.addAction(item_id, label, script_string, order); 
 */ 
