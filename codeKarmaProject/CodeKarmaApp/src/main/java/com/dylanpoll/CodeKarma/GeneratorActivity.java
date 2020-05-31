package com.dylanpoll.CodeKarma;


import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.journeyapps.barcodescanner.BarcodeEncoder;

import org.json.JSONException;

public class GeneratorActivity extends AppCompatActivity {
    private SharedPreferences userData;
    private TextView Name,Karma,Level,Skill,Roles,ProjectHistory,QuestHistory,Streak;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_generator);
        userData = PreferenceManager.getDefaultSharedPreferences(this);

        Name = (TextView) findViewById(R.id.nameField);
        Karma = (TextView) findViewById(R.id.karmaField);
        Level  = (TextView) findViewById(R.id.levelField);
        Skill  = (TextView) findViewById(R.id.skillField);
        Roles = (TextView) findViewById(R.id.rolesField);
        ProjectHistory = (TextView) findViewById(R.id.projhistField);
        QuestHistory = (TextView) findViewById(R.id.questhistField);
        Streak = (TextView) findViewById(R.id.streakField);

        String streak = userData.getString(getString(R.string.streak),"");
        String karma = userData.getString(getString(R.string.karma),"");
        String level = userData.getString(getString(R.string.level),"");
        String name = userData.getString(getString(R.string.name),"");
        String roles = userData.getString(getString(R.string.roles),"");
        String projectHistory = userData.getString(getString(R.string.projectHistory),"");
        String questHistory = userData.getString(getString(R.string.questHistory),"");
        String skills = userData.getString(getString(R.string.skills),"");


        Name.setText(name);
        Karma.setText(karma);
        Level.setText(level);
        Skill.setText(skills);
        Roles.setText(roles);
        ProjectHistory.setText(projectHistory);
        QuestHistory.setText(questHistory);
        Streak.setText(streak);

            }
    }


