package com.dylanpoll.CodeKarma;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

import org.json.JSONException;
import org.json.JSONObject;

public class ReaderActivity extends AppCompatActivity {
    private Button scan_btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reader);
        scan_btn = (Button) findViewById(R.id.scan_btn);
        final Activity activity = this;
        scan_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                IntentIntegrator integrator = new IntentIntegrator(activity);
                integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE_TYPES);
                integrator.setPrompt("Scan");
                integrator.setCameraId(0);
                integrator.setBeepEnabled(true);
                integrator.setBarcodeImageEnabled(false);
                integrator.initiateScan();
            }
        });
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if(result != null){
            if(result.getContents()==null){Toast.makeText(this, "You cancelled the scanning", Toast.LENGTH_LONG).show();//failed to read
                }
                else {
                    Toast.makeText(this, result.getContents(),Toast.LENGTH_LONG).show();//successful read shows text  Toast.makeText(object,object,object).show();
                String karmaID = result.getContents();
                postSignIn(karmaID);
                }
            }else{
            super.onActivityResult(requestCode, resultCode, data);}//failed to read so continue to read
    }
    protected void postSignIn(String karmaID)  {
        String url = "http://192.168.0.2:5000/users/signIn";

        JSONObject body = new JSONObject();
            try {body.put("idtoken", karmaID);} catch (JSONException e) {e.printStackTrace();}//takes the QR code and packs it into the patch body.

        JsonObjectRequest request = new JsonObjectRequest
                (Request.Method.PATCH, url, body, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        //success
                    }
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error

                    }
                });
        // Access the RequestQueue through your singleton class.
        MySingleton.getInstance(this).addToRequestQueue(request);
    }

}
