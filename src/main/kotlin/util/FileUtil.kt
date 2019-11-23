package util

import org.w3c.xhr.JSON
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType


object FileUtil {
    /**
     * Loads a json file.
     * @param {String} path Path to the file.
     * @param {(json)=> {}} callback Callback function.
     */
    fun loadJSON(path: String, onResponse: (dynamic) -> Unit) {
        val xobj = XMLHttpRequest()
        xobj.overrideMimeType("application/json")
        xobj.responseType = XMLHttpRequestResponseType.JSON
        xobj.open("GET", path, true)
        xobj.onreadystatechange =  {
            console.log("on ready")
            console.log(" ${xobj.readyState}  ${xobj.status}")
            if (xobj.readyState == 4.toShort() && xobj.status == 200.toShort()) {
                console.log("",xobj.response)
                onResponse(xobj.response);
            }
        };
        xobj.send(null);
    }
}
