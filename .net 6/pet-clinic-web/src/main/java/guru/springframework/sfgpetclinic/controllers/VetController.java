package guru.springframework.sfgpetclinic.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VetController {

   @GetMapping({"/vets.html"})

   public String listVets()
   {

       return "vets/index";
   }

}
