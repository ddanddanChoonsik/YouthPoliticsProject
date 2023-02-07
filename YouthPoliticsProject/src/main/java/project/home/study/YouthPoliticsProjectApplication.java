package project.home.study;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"project.home.study","data.*"})
@MapperScan({"data.*"})
public class YouthPoliticsProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(YouthPoliticsProjectApplication.class, args);
	}

}
