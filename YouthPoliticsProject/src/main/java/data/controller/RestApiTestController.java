package data.controller;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

//import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.JSONObject;
import org.json.XML;

@RestController
public class RestApiTestController {
	
	@GetMapping("/callApi")
	public String callApiWithXml(){
		
		  StringBuffer result = new StringBuffer();
	        String jsonPrintString = null;
	        try {
	            String apiUrl = "https://www.youthcenter.go.kr/opi/empList.do?" +
	                    "openApiVlak=c4ef1792d2b792033d1e4126" +
	                    "&&pageIndex=1" +
	                    "&display=3";
	            URL url = new URL(apiUrl);
	            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
	            urlConnection.connect();
	            BufferedInputStream bufferedInputStream = new BufferedInputStream(urlConnection.getInputStream());
	            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(bufferedInputStream, "UTF-8"));
	            String returnLine;
	            while((returnLine = bufferedReader.readLine()) != null) {
	                result.append(returnLine);
	            }

	            JSONObject jsonObject = XML.toJSONObject(result.toString());
	            jsonPrintString = jsonObject.toString();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	        return jsonPrintString;
	    }

		
}
