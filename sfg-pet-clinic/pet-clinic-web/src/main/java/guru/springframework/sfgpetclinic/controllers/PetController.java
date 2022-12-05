package guru.springframework.sfgpetclinic.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PetController {

    @GetMapping({"/petForm"})
    public String listOwners()
    {
        return "pets/createOrUpdatePetForm";
    }

}
