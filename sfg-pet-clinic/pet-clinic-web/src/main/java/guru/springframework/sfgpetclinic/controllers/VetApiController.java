package guru.springframework.sfgpetclinic.controllers;

import guru.springframework.sfgpetclinic.model.Vet;
import guru.springframework.sfgpetclinic.services.VetService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class VetApiController {

    private VetService vetService;

    public VetApiController(VetService vetService) {
        this.vetService = vetService;
    }

    @GetMapping("/vetdata")
    public Set<Vet> getVetData()
    {
        Set<Vet> vetSet = vetService.findAll();

        return vetSet;
    }


}
