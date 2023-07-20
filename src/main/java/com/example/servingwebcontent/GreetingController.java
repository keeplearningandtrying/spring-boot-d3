package com.example.servingwebcontent;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class GreetingController {

	@GetMapping("/d3-e1")
	public String d3_e1(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
		model.addAttribute("name", name);
		return "d3-e1";
	}


	@GetMapping("/greeting")
	public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
		model.addAttribute("name", name);
		return "greeting";
	}

	@GetMapping("/graph")
	public String graph() {
		return "graph";
	}

	@GetMapping("/dashboard")
    public String home(@RequestParam(name="name", required=false, defaultValue="User") String name, Model model) {
        model.addAttribute("name", name);
        List<Integer> array = new ArrayList<>();
        array.add(100);
        array.add(200);
        array.add(300);
        array.add(400);
        array.add(100);
        array.add(200);
        array.add(300);
        array.add(400);
        model.addAttribute("data", array);
        return "dashboard";
    }

}
