package com.dylanpoll.CodeKarma;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    Button gen, scan;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (isNetwork(getApplicationContext())){
            Toast.makeText(getApplicationContext(), "Internet Connected", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(getApplicationContext(), "Internet Is Not Connected", Toast.LENGTH_SHORT).show();
        }

        gen = (Button) findViewById(R.id.gen);
        scan = (Button) findViewById(R.id.scan);
        gen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent gIntent = new Intent(MainActivity.this, GeneratorActivity.class);
                startActivity(gIntent);
            }
        });
        scan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent rIntent = new Intent(MainActivity.this, ReaderActivity.class);
                startActivity(rIntent);
            }
        });
    }
    public boolean isNetwork(Context context) {
        ConnectivityManager cm = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        assert cm != null;
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        if (netInfo != null && netInfo.isConnectedOrConnecting()) {
            return true;
        }
        return false;
    }
}
