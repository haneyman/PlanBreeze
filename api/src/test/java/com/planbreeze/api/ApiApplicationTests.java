package com.planbreeze.api;

import org.junit.jupiter.api.Test;

import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiApplicationTests {
	@Autowired
	private TestRestTemplate template;

	@Test
	public void getHello() throws Exception {
		ResponseEntity<String> response = template.getForEntity("/greeting?Test1", String.class);
		JSONAssert.assertEquals("{\"id\":1,\"content\":\"Hello, World!\"}", response.getBody(), true);
		System.out.println(response);
		assertThat(response.getBody()).isEqualTo("{\"id\":1,\"content\":\"Hello, World!\"}");
	}
}