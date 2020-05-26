package com.dylanpoll.CodeKarma;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {

    private SharedPreferences userData;
    private SharedPreferences.Editor userDataEditor;

    private Button userLogin, register;

    private EditText Mainurl,Email,Password;

    private CheckBox SaveLogin;  //todo


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //attach layout objects to program
        userLogin = (Button) findViewById(R.id.userlogin);
        register = (Button) findViewById(R.id.register);
        Email = (EditText) findViewById(R.id.email);
        Password= (EditText) findViewById(R.id.password);
        Mainurl = (EditText) findViewById(R.id.mainurl);
        SaveLogin = (CheckBox) findViewById(R.id.saveAccountInfo);

        //login Data
        userData = PreferenceManager.getDefaultSharedPreferences(this);
        userDataEditor = userData.edit();
        getSavedData();
                    //login button
                    userLogin.setOnClickListener(new View.OnClickListener() {
                                        @Override
                                        public void onClick(View view) {
                                            if(SaveLogin.isChecked()){
                                                //save checkbox
                                                userDataEditor.putString(getString(R.string.saveAccountInfo),"Save user data? : True");
                                                userDataEditor.commit();
                                                //save url
                                                String url = Mainurl.getText().toString();
                                                userDataEditor.putString(getString(R.string.serverMainurl),url);
                                                userDataEditor.commit();
                                                //save email
                                                String aEmail = Email.getText().toString();
                                                userDataEditor.putString(getString(R.string.userEmail),aEmail);
                                                userDataEditor.commit();
                                                //save password
                                                String aPassword = Password.getText().toString();
                                                userDataEditor.putString(getString(R.string.userPassword),aPassword);
                                                userDataEditor.commit();
                                                }else
                                                    {  //clear checkbox
                                                        userDataEditor.putString(getString(R.string.saveAccountInfo),"Save user data? : False");
                                                        userDataEditor.commit();
                                                        String url = Mainurl.getText().toString();
                                                        userDataEditor.putString(getString(R.string.serverMainurl),"");
                                                        userDataEditor.commit();
                                                        //save email
                                                        String aEmail = Email.getText().toString();
                                                        userDataEditor.putString(getString(R.string.userEmail),"");
                                                        userDataEditor.commit();
                                                        //save password
                                                        String aPassword = Password.getText().toString();
                                                        userDataEditor.putString(getString(R.string.userPassword),"");
                                                        userDataEditor.commit();
                                                        }
                                            postSignIn();
                                            }});
                    //register button
                    register.setOnClickListener(new View.OnClickListener() {
                                            @Override
                                            public void onClick(View view) {
                                                    Intent rIntent = new Intent(MainActivity.this, GeneratorActivity.class);
                                                    startActivity(rIntent);//sends user to register page
                                                }});
    }
    protected void getSavedData() {
        String saveLogin = userData.getString(getString(R.string.saveAccountInfo),"Save user data? : False");
        String mainurl = userData.getString(getString(R.string.serverMainurl),"");
        String email = userData.getString(getString(R.string.userEmail),"");
        String password = userData.getString(getString(R.string.userPassword),"");

        Email.setText(email);
        Mainurl.setText(mainurl);
        Password.setText(password);
        SaveLogin.setText(saveLogin);

        if(saveLogin.equals("Save user data? : True")){
            SaveLogin.setChecked(true);
            }else{
                 SaveLogin.setChecked(false);
                }
    }
    protected void postSignIn()  {
        //get email
        String aEmail = Email.getText().toString();
        //get password
        String aPassword = Password.getText().toString();
        JSONObject body = new JSONObject();
            try {   body.put("email", aEmail);
                    body.put("password",aPassword);
                    } catch (JSONException e) {e.printStackTrace();}//takes the QR code and packs it into the patch body.
            //get url
            String url =  Mainurl.getText().toString()+"/users/logIn";
            JsonObjectRequest request = new JsonObjectRequest(Request.Method.POST, url, body, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {// this will echo back the users name + signed in.
                        try {
                                    try {
                                        String discord = response.getString("discordID");
                                        userDataEditor.putString(getString(R.string.discordid), discord);
                                        userDataEditor.commit();
                                    }catch(Exception e){ }
                                    String admin =response.getString("admin");
                                    userDataEditor.putString(getString(R.string.admin),admin);
                                    userDataEditor.commit();
                                    String karma =response.getString("karma");
                                    userDataEditor.putString(getString(R.string.karma),karma);
                                    userDataEditor.commit();
                                    String level =response.getString("level");
                                    userDataEditor.putString(getString(R.string.level),level);
                                    userDataEditor.commit();
                                    String name =response.getString("name");
                                    userDataEditor.putString(getString(R.string.name),name);
                                    userDataEditor.commit();
                                    String roles =response.getString("roles");
                                    userDataEditor.putString(getString(R.string.roles),roles);
                                    userDataEditor.commit();
                                    String projectHistory =response.getString("projectHistory");
                                    userDataEditor.putString(getString(R.string.projectHistory),projectHistory);
                                    userDataEditor.commit();
                                    String questHistory =response.getString("questHistory");
                                    userDataEditor.putString(getString(R.string.questHistory),questHistory);
                                    userDataEditor.commit();
                                    String skills =response.getString("skills");
                                    userDataEditor.putString(getString(R.string.skills),skills);
                                    userDataEditor.commit();
                                    String streak =response.getString("streak");
                                    userDataEditor.putString(getString(R.string.streak),streak);
                                    userDataEditor.commit();
                                if(response.getBoolean("admin") == true){
                                    Intent logInIntent = new Intent(MainActivity.this, AdminHomeActivity.class);//creates the action for going to next layout.
                                    startActivity(logInIntent);//sends user to their home page
                                    }
                                if(response.getBoolean("admin") == false){
                                Intent logInIntent = new Intent(MainActivity.this, HomeActivity.class);//creates the action for going to next layout.
                                startActivity(logInIntent);//sends user to their home page
                                }}catch (JSONException e) {e.printStackTrace();}}
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) { }
                    });
        // Access the RequestQueue through your singleton class.
        MySingleton.getInstance(this).addToRequestQueue(request);
        }
    }
