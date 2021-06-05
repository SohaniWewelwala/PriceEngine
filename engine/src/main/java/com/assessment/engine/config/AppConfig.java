package com.assessment.engine.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;

/**
 * Created By Sohani on 6/5/2021
 */

//@Configuration
public class AppConfig {

//    private Environment env;
//
//    @Bean
//    public DataSource dataSource() {
//        HikariConfig config = new HikariConfig();
//        config.setJdbcUrl(env.getRequiredProperty("jdbc.url"));
//        config.setUsername(env.getRequiredProperty("jdbc.username"));
//        config.setPassword(env.getRequiredProperty("jdbc.password"));
//        config.setMaximumPoolSize(Integer.parseInt(env.getRequiredProperty("hbb-repository.max-pool-size")));
//        config.setMaxLifetime(1800000);
//        config.setLeakDetectionThreshold(120000);
//        return new HikariDataSource(config);
//    }
//
//    @Bean
//    public JdbcTemplate jdbcTemplate() {
//        return new JdbcTemplate(dataSource());
//    }
//
//    @Bean
//    public NamedParameterJdbcTemplate namedParameterJdbcTemplate() {
//        return new NamedParameterJdbcTemplate(dataSource());
//    }
}
