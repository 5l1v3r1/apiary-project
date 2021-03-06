<?php
/*
* Smarty plugin
* 覧覧覧覧覧覧覧覧覧覧-
* File:     function.friendly_date.php
* Type:     function
* Name:     recurse_array
* Purpose:  prints out elements of an array recursively
* 覧覧覧覧覧覧覧覧覧覧-
*/

function smarty_function_friendly_date($params, &$smarty)
{
    $target_date = $params['date'];
    if ( trim($target_date) != '' )
        return date("F d, Y",strtotime($params['date']));
    else
        return '';
}
